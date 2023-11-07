FROM redis:latest
LABEL name="roboRedis"
EXPOSE 6379

COPY redis.conf /etc/redis/redis.conf

CMD [ "redis-server", "/etc/redis/redis.conf" ]


