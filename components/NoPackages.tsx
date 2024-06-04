import Link from "next/link";

const NoPackages = () => {
  return (
    <div className="nopackages">
      <h2 className="nopackages-title">
        Hmm, we couldn&apos;t find any destination that match your search.
      </h2>
      <h3 className="nopackages-subtitle">
        No worries, we can still help you plan your trip. Just click the button
        below to get started.
      </h3>
      <Link href="/contact-us" className="nopackages-button offset">
        Start Planning
      </Link>
    </div>
  );
};

export default NoPackages;
