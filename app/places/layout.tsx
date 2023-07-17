import "../../styles/globals.css";

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="block">

      {/* my layout update */}
      {children}
    </div>
  );
}
