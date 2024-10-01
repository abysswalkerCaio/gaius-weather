export default function PrimaryHeader(props: any) {
  return (
    <h1 className="text-lg sm:text-xl md:text-2xl mb-4 text-zinc-800 dark:text-zinc-200 font-sans font-bold break-all">
      {props.title}
    </h1>
  );
}
