#!/usr/bin/env python3

import PIL
import PIL.Image
import PIL.ImageOps
import os

def generate_android_icons():
    #
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

def generate_android_splash():
    #
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

def generate_ios_splash():
    #
    # Generate a single image for ios
    splash_size = (2000, 2000)

    src_img = PIL.Image.open(os.path.join('app', 'resources', 'splash.png'))
    dest_img = PIL.ImageOps.fit(src_img, splash_size)
    dest_path = os.path.join(
        'app',
        'resources',
        'ios',
        'splash',
        'Default@2x~universal~anyany.png'
    )
    print('Generating', dest_path)
    dest_img.save(dest_path)

def generate_ios_icons():
    icon_specs = (
        ('icon-1024.png',  1024),
        ('icon@2x.png',  114),
        ('icon-40@2x.png',  80),
        ('icon-40@3x.png',  120),
        ('icon-40.png',  40),
        ('icon-50@2x.png',  100),
        ('icon-50.png',  50),
        ('icon-60@2x.png',  120),
        ('icon-60@3x.png',  180),
        ('icon-60.png',  60),
        ('icon-72@2x.png',  144),
        ('icon-72.png',  72),
        ('icon-76@2x.png',  152),
        ('icon-76.png',  76),
        ('icon-83.5@2x.png',  167),
        ('icon.png',  57),
        ('icon-small@2x.png',  58),
        ('icon-small@3x.png',  87),
        ('icon-small.png',  29),
    )

    src_img = PIL.Image.open(os.path.join('app', 'resources', 'icon.png'))
    for fname, size in icon_specs:
        dest_img = src_img.resize((size, size))
        dest_path = os.path.join(
            'app',
            'resources',
            'ios',
            'icon',
            fname
        )
        print('Generating', dest_path)
        dest_img.save(dest_path)


generate_android_icons()
generate_android_splash()
generate_ios_splash()
generate_ios_icons()
