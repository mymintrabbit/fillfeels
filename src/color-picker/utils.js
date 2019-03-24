const inRangeOf = (hue, min, max) => {
  return min <= hue && hue < max
}

export const mapHueToColor = hue => {
  if (inRangeOf(hue, 0, 5)) {
    return '#d6d65c'
  }

  if (inRangeOf(hue, 5, 10)) {
    return '#ccd55d'
  }

  if (inRangeOf(hue, 10, 15)) {
    return '#b9d260'
  }

  if (inRangeOf(hue, 15, 20)) {
    return '#8bcc66'
  }

  if (inRangeOf(hue, 20, 25)) {
    return '#7acc66'
  }

  if (inRangeOf(hue, 25, 30)) {
    return '#6bcc66'
  }

  if (inRangeOf(hue, 30, 35)) {
    return '#66cc69'
  }

  if (inRangeOf(hue, 35, 40)) {
    return '#66cc7a'
  }

  if (inRangeOf(hue, 40, 45)) {
    return '#66cc90'
  }

  if (inRangeOf(hue, 45, 50)) {
    return '#64cc9a'
  }

  if (inRangeOf(hue, 50, 55)) {
    return '#53cba6'
  }

  if (inRangeOf(hue, 55, 60)) {
    return '#42cbb8'
  }

  if (inRangeOf(hue, 60, 105)) {
    return '#33cccc'
  }

  if (inRangeOf(hue, 105, 110)) {
    return '#33bdc8'
  }

  if (inRangeOf(hue, 110, 115)) {
    return '#339fc0'
  }

  if (inRangeOf(hue, 115, 120)) {
    return '#3478b4'
  }

  if (inRangeOf(hue, 120, 125)) {
    return '#3478b4'
  }

  if (inRangeOf(hue, 125, 130)) {
    return '#345ba9'
  }

  if (inRangeOf(hue, 130, 135)) {
    return '#33419f'
  }

  if (inRangeOf(hue, 135, 145)) {
    return '#33379b'
  }

  if (inRangeOf(hue, 215, 220)) {
    return '#d0363a'
  }

  if (inRangeOf(hue, 220, 225)) {
    return '#d63c46'
  }

  if (inRangeOf(hue, 225, 230)) {
    return '#db4251'
  }

  if (inRangeOf(hue, 230, 235)) {
    return '#e44f68'
  }

  if (inRangeOf(hue, 235, 240)) {
    return '#ed5e81'
  }

  if (inRangeOf(hue, 240, 245)) {
    return '#f26992'
  }

  if (inRangeOf(hue, 245, 250)) {
    return '#f673a0'
  }

  if (inRangeOf(hue, 250, 255)) {
    return '#f97eae'
  }

  if (inRangeOf(hue, 255, 260)) {
    return '#fd8dc0'
  }

  if (inRangeOf(hue, 260, 270)) {
    return '#fd8dc0'
  }

  if (inRangeOf(hue, 270, 275)) {
    return '#ff99cc'
  }

  if (inRangeOf(hue, 275, 280)) {
    return '#ff99bd'
  }

  if (inRangeOf(hue, 280, 285)) {
    return '#ff99ab'
  }

  if (inRangeOf(hue, 285, 290)) {
    return '#ff999a'
  }

  if (inRangeOf(hue, 290, 295)) {
    return '#fe9a96'
  }

  if (inRangeOf(hue, 295, 300)) {
    return '#fc9d8e'
  }

  if (inRangeOf(hue, 300, 305)) {
    return '#f8a385'
  }

  if (inRangeOf(hue, 305, 310)) {
    return '#f5a97e'
  }

  if (inRangeOf(hue, 310, 320)) {
    return '#f0b176'
  }

  if (inRangeOf(hue, 320, 330)) {
    return '#ebba6f'
  }

  if (inRangeOf(hue, 330, 340)) {
    return '#e5c369'
  }

  if (inRangeOf(hue, 340, 345)) {
    return '#dfcc63'
  }

  if (inRangeOf(hue, 345, 350)) {
    return '#d9d35e'
  }

  if (inRangeOf(hue, 350, 360)) {
    return '#d7d65c'
  }

  return 'white'
}

export const getGradient = (hue1, hue2) => {
  const degree = ((hue1 - hue2) / 2) % 360
  return `linear-gradient(${degree}deg, ${mapHueToColor(hue1)}, ${mapHueToColor(hue2)})`
}
