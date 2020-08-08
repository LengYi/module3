# !/bin/sh
#获取脚本所在的绝对路径
currentPath=$(cd "$(dirname "$0")";pwd)
#RN资源存放路径
assetsPath="${currentPath}/Assets"

#echo $assetsPath
# 删除旧RN资源
rm -rf $assetsPath
# 重新创建文件目录
mkdir -p $assetsPath
# 重新生成RN资源包

cd ..
#npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output Release_ios/Assets/main.jsbundle --assets-dest Release_ios/Assets

npx react-native bundle --entry-file index.js --platform android --dev false --bundle-output Release_android/Assets/main.jsbundle --assets-dest Release_android/Assets

