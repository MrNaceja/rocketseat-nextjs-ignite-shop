export function Button(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="bg-brand-primary text-white px-4 py-3 font-bold rounded-md hover:bg-brand-light"
    />
  );
}
