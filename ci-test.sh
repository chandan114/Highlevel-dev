# apk add binutils-gold curl gnupg libgcc linux-headers python git openssl openssh lcms2-dev libpng-dev autoconf automake
# curl -s "https://gitlab.com/api/v4/projects/9905046/repository/files/gitlab%2Fsetup_key.sh/raw?ref=master&private_token=FjCQxPFMNXJwmaomMoKi" 2>&1 | sh
# ssh-keyscan -t rsa gitlab.com >> ~/.ssh/known_hosts

NODE_ENV="test"
# npm i
#npm test
mkdir coverage
node coverage_output.ts
cp coverage_output.ts ./coverage

cp coverage/** /mnt/artifacts/ -R