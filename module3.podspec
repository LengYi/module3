# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

Pod::Spec.new do |s|
  s.name                   = "module3"
  s.version                = '0.1.2'
  s.summary                = "module3 of React Native."
  s.homepage               = "https://github.com/LengYi/module3"
  s.author                 = "Facebook, Inc. and its affiliates"
  s.license                = { :type => 'MIT', :file => 'LICENSE'}
  s.source                 = { :git => 'git@github.com:LengYi/module3.git', :tag => s.version.to_s}
  s.platforms              = { :ios => "10.0" }

  s.static_framework = true
  s.source_files     = 'Release_ios/Classes/**/*'
  s.exclude_files    = 'android/**/*', 'ios/**/*','node_modules/**/*'

  s.resource_bundle        = { "module3" => ["Release_ios/Assets/**/*.{jsbundle,json,png}"]}
  #s.dependency 'VVRNBaseModule'
end
