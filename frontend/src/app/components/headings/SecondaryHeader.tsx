export default function SecondaryHeader(props: any) {
  return (
    <h2 className="text-base sm:text-lg md:text-xl mb-4 text-deep-ocean-950 dark:text-deep-ocean-200 font-sans font-bold break-all">
      {props.title}
    </h2>
  );
}
