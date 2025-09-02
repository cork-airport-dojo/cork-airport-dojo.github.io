import { COURSES_CATEGORY } from "@/utils/data";


const CoursesSection = () => {


  return (
    <section id={"courses"} className={`py-12 px-4 relative`}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Code Club
          <span className="text-blue-500 font-bold ml-2">
                Courses
          </span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here are some of this term courses. Each Course was carefully crafted with attention to detail,
          performance for the students can follow to grow there skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_CATEGORY.map((course, id) => (
            <div key={id} className="group bg-card rounded-lg overflow-hidden shadow-xl/30 card-hover">
              <div className="h-48 overflow-hidden">
                <img src={course.img} alt={course.description} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {course.tags.map((tag) =>(
                    <span className="px-2 py-1 text-xs font-bold rounded-full text-purple-800 ">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl text-center font-semibold mb-1">{course.title}</h3>
              <p className="text-muted-foreground p-4 pl-8 text-md ">{course.description}</p>
              <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                      <a>
                        {" "}
                        
                      </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )}

export default CoursesSection;