# usage: rake preview
desc "Launch preview environment"
task :preview do
	sh "ruby -rwebrick -e \"WEBrick::HTTPServer.new({:DocumentRoot => './', :Port => 8000}).start\""
end
