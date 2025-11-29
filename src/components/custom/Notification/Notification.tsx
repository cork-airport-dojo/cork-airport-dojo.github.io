import { useEffect, useMemo, useState } from "react";
import styles from "../../../styles/notification.module.scss";
import notificationsPayload from "../../../utils/notifications.json";


type Severity = "info" | "success" | "warning" | "error";

type NotificationItem = {
  id: string;
  message: string;
  title?: string;
  severity?: Severity;
  href?: string;
  cta?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  startAt?: string;
  endAt?: string;
  durationDays?: number;
  badge?: string;
};

type NotificationsJson = {
  notifications: NotificationItem[];
};

const STORAGE_KEY = "site:notifications:dismissed:v15";

function parseDateSafe(iso?: string): number | undefined {
  if (!iso) return undefined;
  const t = Date.parse(iso);
  return Number.isNaN(t) ? undefined : t;
}

function isWithinWindow(n: NotificationItem, nowMs: number): boolean {
  const start = parseDateSafe(n.startAt);
  let end = parseDateSafe(n.endAt);

  if (!end && start !== undefined && typeof n.durationDays === "number" && Number.isFinite(n.durationDays)) {
    end = start + n.durationDays * 24 * 60 * 60 * 1000;
  }

  if (start !== undefined && nowMs < start) return false;
  if (end !== undefined && nowMs > end) return false;
  return true;
}


function loadDismissed(key = STORAGE_KEY): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set(parsed);
    if (parsed && typeof parsed === "object") return new Set(Object.keys(parsed).filter((k) => parsed[k]));
  } catch {
  }
  return new Set();
}

function saveDismissed(ids: Set<string>, key = STORAGE_KEY) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(ids)));
  } catch {
  }
}

export interface NotificationsProps {
  single?: boolean;
  storageKeyOverride?: string;
  className?: string;
  fixedTop?: boolean;
  style?: React.CSSProperties;
}

const severityClass: Record<Severity, string> = {
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

export function Notifications({
                                single = false,
                                storageKeyOverride,
                                className,
                                fixedTop = false,
                                style,
                              }: NotificationsProps) {
  const json = notificationsPayload as NotificationsJson;
  const storageKey = storageKeyOverride || STORAGE_KEY;

  const [dismissed, setDismissed] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    return loadDismissed(storageKey);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) {
        setDismissed(loadDismissed(storageKey));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey]);

  const now = Date.now();
  const active = useMemo(() => {
    const list = (json?.notifications ?? []).filter((n) => isWithinWindow(n, now));
    return list;
  }, [json, now]);

  const visible = useMemo(() => {
    const list = active.filter((n) => !dismissed.has(n.id));
    return single ? list.slice(0, 1) : list;
  }, [active, dismissed, single]);

  const handleDismiss = (id: string) => {
    const next = new Set(dismissed);
    next.add(id);
    setDismissed(next);
    saveDismissed(next, storageKey);
  };

  if (visible.length === 0) return null;

  return (
    <div
      className={[
        styles.container,
        fixedTop ? "fixed inset-x-0 top-0 z-50 p-3 md:p-4" : "w-full px-3 md:px-4 mt-2 md:mt-3",
        "space-y-2 md:space-y-3",
        className ?? "",
      ].join(" ")}
      style={style}
      role="region"
      aria-label="Site notifications"
    >
      {visible.map((n) => {
        const sev: Severity = n.severity ?? "info";
        const isCritical = sev === "error";
        const badgeText = n.badge ?? (isCritical ? "Weather warning" : undefined);

        return (
          <div
            key={n.id}
            className={[
              styles.notification,
              styles.enter,
              severityClass[sev],
              "border rounded-md shadow-sm flex items-start gap-3 px-3 py-2 md:px-4 md:py-3",
              "backdrop-blur supports-[backdrop-filter]:bg-opacity-90",
            ].join(" ")}
            role={isCritical ? "alert" : "status"}
            aria-live={isCritical ? "assertive" : "polite"}
          >
            {/*Quick fix for icons in svg can be replaced with icons in the future*/}
            <div aria-hidden="true" className={styles.icon}>
              {sev === "success" && (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707Z" clipRule="evenodd"/>
                </svg>
              )}
              {sev === "warning" && (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.593c.75 1.335-.213 2.998-1.743 2.998H3.482c-1.53 0-2.493-1.663-1.743-2.998L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V8a1 1 0 112 0v3a1 1 0 01-1 1z" clipRule="evenodd"/>
                </svg>
              )}
              {sev === "error" && (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3-9a1 1 0 00-1-1H8a1 1 0 100 2h4a1 1 0 001-1z" clipRule="evenodd"/>
                </svg>
              )}
              {sev === "info" && (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zM9 9a1 1 0 112 0v5a1 1 0 11-2 0V9zm2-3a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd"/>
                </svg>
              )}
            </div>

            <div className="flex-1 min-w-0">
              {(badgeText || n.title) && (
                <div className={styles.titleRow}>
                  {badgeText && <span className={styles.badge}>{badgeText}</span>}
                  {n.title ? (
                    <h3 className="font-semibold text-sm md:text-base leading-5 md:leading-6">{n.title}</h3>
                  ) : null}
                </div>
              )}
              <p className="md:text-[1.25rem] mt-4 whitespace-pre-wrap leading-5 md:leading-6">
                {n.message}
                {n.href ? (
                  <>
                    {" "}
                    <a
                      href={n.href}
                      target={n.target ?? "_self"}
                      rel={n.target === "_blank" ? "noopener noreferrer" : undefined}
                      className={styles.link}
                    >
                      {n.cta ?? "Learn more"}
                    </a>
                  </>
                ) : null}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleDismiss(n.id)}
              className={styles.dismiss}
              aria-label="Dismiss notification"
              title="Dismiss"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 11-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;