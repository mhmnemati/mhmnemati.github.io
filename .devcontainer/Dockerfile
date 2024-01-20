FROM mcr.microsoft.com/devcontainers/base:debian-11

RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash -
RUN apt-get install -y nodejs

RUN --mount=type=bind,source=package.json,target=/opt/package.json \
    --mount=type=bind,source=package-lock.json,target=/opt/package-lock.json \
    npm ci --prefix /opt
