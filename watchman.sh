cd /tmp
git clone https://github.com/facebook/watchman.git
cd watchman/
git checkout v4.7.0
sudo apt-get install -y autoconf automake build-essential python-dev libtool libssl-dev
./autogen.sh 
./configure --enable-lenient
make
sudo make install
