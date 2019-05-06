#!/usr/bin/env python3

import PIL
import PIL.Image
import PIL.ImageOps
import os

# Generate the icons
icon_sizes = (
    (36, 'ldpi'),
    (48, 'mdpi'),
    (72, 'hdpi'),
    (96, 'xhdpi'),
    (144, 'xxhdpi'),
    (192, 'xxxhdpi')
)
src_img = PIL.Image.open(os.path.join('app', 'resources', 'icon.png'))
for size, name in icon_sizes:
    dest_img = src_img.resize((size, size))
    dest_path = os.path.join(
        'app',
        'resources',
        'android',
        'icon',
        'drawable-{}-icon.png'.format(name))
    print('Generating', dest_path)
    dest_img.save(dest_path)

# Generate the splash screens
splash_sizes = (
    ('land-hdpi', 800, 480),
    ('land-ldpi', 320, 200),
    ('land-mdpi', 480, 320),
    ('land-xhdpi', 1280, 720),
    ('land-xxhdpi', 1600, 960),
    ('land-xxxhdpi', 1920, 1280),
    ('port-hdpi', 480, 800),
    ('port-ldpi', 200, 320),
    ('port-mdpi', 320, 480),
    ('port-xhdpi', 720, 1280),
    ('port-xxhdpi', 960, 1600),
    ('port-xxxhdpi', 1280, 1920),
)

src_img = PIL.Image.open(os.path.join('app', 'resources', 'splash.png'))
for name, width, height in splash_sizes:
    dest_img = PIL.ImageOps.fit(src_img, (width, height))
    dest_path = os.path.join(
        'app',
        'resources',
        'android',
        'splash',
        'drawable-{}-screen.png'.format(name))
    print('Generating', dest_path)
    dest_img.save(dest_path)
