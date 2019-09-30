#!/bin/bash

cd app

# Extract the app version from config.xml
VERSION=`grep "widget.*version" config.xml | sed -e 's/.*version="\([0-9]*.[0-9]*.[0-9]*\).*/\1/'`
KEYSTORE_NAME=maestra

if [ "$VERSION" = "" ]; then
    echo "Cannot parse version from config.xml"
    exit
fi

TARGET=maestra-release-${VERSION}.apk

echo "Building version $VERSION"

# Update the app version number (in src)
cat > src/version.ts <<EOF
export const Version = {
    NUMBER: '$VERSION',
};
EOF

./node_modules/.bin/ionic cordova build android --prod --release $*

zipalign -p 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ${TARGET}

apksigner sign --verbose --ks-key-alias ${KEYSTORE_NAME} --ks ~/secrets/${KEYSTORE_NAME}.keystore ${TARGET}

echo "Release built: ${TARGET}"
