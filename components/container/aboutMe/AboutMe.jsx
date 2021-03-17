export const AboutMe = () => {
  return (
    <div className="h-screen grid grid-flow-row auto-cols-max auto-rows-min place-items-center place-content-center gap-4">
      <div className="font-carme text-2xl" id="about-me">
        About Me
      </div>
      <div className="grid grid-flow-row md:grid-flow-col auto-cols-auto auto-rows-auto place-items-center place-content-center gap-4 md:gap-10">
        <img
          className="object-cover shadow-lg rounded-lg w-80 h-56 md:w-56 md:h-80"
          src="/david.jpg"
          alt="Picture of David Griffin"
        />

        <div className="max-w-xs md:max-w-md grid grid-flow-row auto-rows-auto auto-cols-auto gap-4">
          <div className="font-carme text-xl tracking-wide">
            David W Griffin II
          </div>
          <div className="text-primary font-montserrat text-sm leading-relaxed text-justify">
            <p>
              Trained in both architecture and building science, I have focused
              my career on the integration of the built environment and energy
              conserving/ consuming systems. A focus on whole building energy
              simulation allows me to provide investment grade financial
              analysis to all parties involved proving the business case for
              sustainability in both new construction and existing buildings. My
              experience includes healthcare, higher education, commercial,
              federal and municipal buildings. Applying my experience, I
              continue to push the envelope and diligently seek out
              opportunities to save the world - one building at a time.
            </p>
          </div>
          <div className="place-self-start">
            <a href="#">
              <svg
                enableBackground="new 0 0 56.693 56.693"
                version="1.1"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary w-6 h-6"
              >
                <g
                  transform="matrix(.50582 0 0 .50263 -1.7673 -2.3458)"
                  className="fill-current"
                >
                  <path
                    d="m30.071 27.101v-0.077c-0.016 0.026-0.033 0.052-0.05 0.077z"
                    className="fill-current"
                  />
                  <path
                    d="m49.265 4.667h-42.12c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562v-42.613c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637h-7.465v-22.459h7.465zm-3.732-25.527h-0.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465v-12.018c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-0.197 0.479-0.245 1.149-0.245 1.821v12.543h-7.465s0.098-20.354 0-22.459h7.465v3.179c0.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z"
                    className="fill-current"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
