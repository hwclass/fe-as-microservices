export const combiner = (parts) => {
  let fragments = parts.forEach((fragment) => import(fragment))
  const container = () => {
    return (
      <div>
        {fragments}
      </div>
    )
  }
  return container
}