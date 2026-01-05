import Link from "next/link";
import Image from "next/image";

interface Props {
  destination?: string;
  description?: string[];
  reasons?: {
    title: string;
    description: string[];
    image: string;
  }[];
}

const DestinationDescription = ({
  destination,
  reasons,
  description,
}: Props) => {
  return (
    <div className="destination-reasons-wrapper">
      <h2>{destination}</h2>
      <div className="destination-reasons-wrapper-description">
        {description?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="destination-reasons">
        {reasons?.map((reason, index) => (
          <div className="destination-reason" key={index}>
            <div className="reason-image" style={{ position: "relative" }}>
              <Image
                src={reason.image}
                alt={reason.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
            </div>

            <div className="reason-description">
              <h2>{reason.title}</h2>
              {reason.description.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link href={"/enquire"} className="offset reason-button">
        Start Planning
      </Link>
    </div>
  );
};

export default DestinationDescription;
