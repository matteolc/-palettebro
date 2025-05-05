export function Welcome() {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <h1
          className={
            'scroll-m-20 font-medium tracking-tighter text-balance text-7xl text-muted-foreground'
          }
        >
          Create beautiful color palettes with{' '}
          <span className="title-gradient text-transparent bg-clip-text font-bold pr-2">
            Palettebro
          </span>
        </h1>
      </header>
    </div>
  );
}
