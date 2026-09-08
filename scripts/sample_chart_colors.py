from collections import Counter
from pathlib import Path

from PIL import Image


image_path = Path("/home/ubuntu/orgchart-source/orgchart-page-1.png")
image = Image.open(image_path).convert("RGB")

# Source category fills are large, saturated rectangular areas. Count pixels after
# quantizing lightly to eliminate antialiasing and compression variations.
quantized = Counter()
for red, green, blue in image.getdata():
    maximum = max(red, green, blue)
    minimum = min(red, green, blue)
    if maximum < 90 or maximum - minimum < 45:
        continue
    rgb = (round(red / 4) * 4, round(green / 4) * 4, round(blue / 4) * 4)
    quantized[rgb] += 1

for rgb, count in quantized.most_common(24):
    print(f"#{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}  {count:,} pixels")
