export function Nav() {
  return (
    <div className="fixed right-2 top-2 nav-text grid auto-cols-max gap-4 justify-end">
      <div className="col-start-1">
        <a href="#about-me">
          <div className="bg-primary-light rounded-full px-2 py-1 shadow-lg">
            About Me
          </div>
        </a>
      </div>
      <div className="col-start-2">
        <a href="#my-projects">
          <div className="bg-primary-light rounded-full px-2 py-1 shadow-lg">
            My Projects
          </div>
        </a>
      </div>
      <div className="col-start-3">
        <a href="#news">
          <div className="bg-primary-light rounded-full px-2 py-1 shadow-lg">
            News
          </div>
        </a>
      </div>
      <div className="col-start-4">
        <a href="#learn-more">
          <div className="bg-primary-light rounded-full px-2 py-1 shadow-lg">
            Learn More
          </div>
        </a>
      </div>
    </div>
  );
}
