require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-awesome-module"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/esteban-aristizabal/react-native-awesome-module.git", :tag => "#{s.version}" }


  s.source_files = "ios/**/*.{h,m,mm}"

  s.subspec 'SiftReactNative' do |sp|
    sp.source_files = 'node_modules/sift-react-native/ios/**/*.{h,m,mm}'
  end

  s.dependency "React"
  s.dependency "Sift"
end
