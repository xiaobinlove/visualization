export type ColorSelectChange = (hex: string) => void
export type PaletteSelectProps = {
  value?: string
  onChange?: (val: string) => void
  options: { label: string; value: string }[]
  paletteMap: Record<string, string[]>
}
