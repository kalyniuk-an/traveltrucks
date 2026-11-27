export function formatLocation(location: string): string{
  return location.split(', ').reverse().join(', ');
}

export function getLabel(options: { label: string; value: string }[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function formatUnit(value: string): string {
  return value.replace(/^([\d.]+)(\D)/, '$1 $2');
}