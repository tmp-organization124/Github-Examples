export GH_USERNAME='A-3llam'
export GH_TOKEN=''
export GH_IMAGE_NAME='hello-world'
export GH_VER='1.0.0'
export TAG_NAME="ghcr.io/a-3llam/$GH_IMAGE_NAME:$GH_VER"

echo $GH_TOKEN | docker login ghcr.io -u $GH_USERNAME --password-stdin

docker tag $GH_IMAGE_NAME:latest ghcr.io/a-3llam/$GH_IMAGE_NAME:$GH_VER

docker push $TAG_NAME

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO