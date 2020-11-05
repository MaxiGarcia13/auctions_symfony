FROM php:7.4-cli

WORKDIR /usr/src/app

COPY . /usr/src/app

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install