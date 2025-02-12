import Link from "next/link";
import Image from "next/image";
interface Props {
  img1: string;
  img2: string;
  title?: string;
  description?: string[];
  button?: string;
  lr?: boolean;
  link?: string;
  subtitle?: string;
  color?: boolean;
}

const Intro2 = (props: Props) => {
  return (
    <section id="about" className={"home-intro"}>
      (
      <div className="intro-container2">
        <div className="intro-text2" data-aos="fade-left">
          <h2 className="intro-heading2">{props.title}</h2>
          <h3 className="intro-subheading2">{props.subtitle}</h3>
          {props.description &&
            props.description.map((description, index) => (
              <p className="intro-description2" key={index}>
                {description}
              </p>
            ))}
          {props.button && (
            <Link
              className="offset"
              style={{
                color: "rgb(51, 51, 51)",
              }}
              href={props.link ? props.link : "/tours-by-experience"}
            >
              {props.button}
            </Link>
          )}
        </div>
      </div>
      )
    </section>
  );
};

export default Intro2;
