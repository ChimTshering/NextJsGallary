import "../../styles/globals.css";

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      {children}
    </div>
  );
}
