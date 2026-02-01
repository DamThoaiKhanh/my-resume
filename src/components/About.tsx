export const About = () => {
  return (
    <section id="about" className="container py-10 sm:py-15">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-5 md:gap-8">
          <div className="bg-green-0 flex flex-col justify-between items-center">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold md:text-center">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I am a Robotics / AMR Software Engineer with hands-on experience
                building control and monitoring applications for AMR robots.
                Strong focus on Qt/C++ (OOP, Design Patterns, SOLID principles),
                multithreaded programming, and system-level design. Experienced
                with network and communication protocols (TCP/IP, UDP, HTTP,
                WebSocket, MQTT), and contributed to multi-robot management
                systems, local backend server. Developed a web-based
                monitoring/control application, and mobile applications as part
                of the robot ecosystem. Also have practical experience with
                embedded C on STM32 for robot integration and low-level
                communication.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
