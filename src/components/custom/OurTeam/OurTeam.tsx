import { buttonVariants } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TeamData } from "@/utils/data";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}
import {   FiGithub, FiLinkedin } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const OurTeam = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <FiLinkedin size="20" />;

      case "Github":
        return <FiGithub size="20" />;

      case "Portfolio":
        return <CgWebsite size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="min-h-screen max-w-7xl mx-auto w-full z-10 mt-10 py-24"
    >
      <h2 className="text-3xl md:text-4xl pt-8 font-bold text-blue-500">
        <span className="text-gray-900">
          Our Dedicated{" "}
        </span>
        Team
      </h2>

      <p className="mt-8 mb-24 text-xl text-muted-foreground">
        These IBMers give their time and energy each week to make Cork Airport Code Club happen.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {TeamData.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50  relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-blue-500 font-bold">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2 font-light">
                {description}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default OurTeam;