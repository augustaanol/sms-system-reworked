import dramatiq
from dramatiq.brokers.redis import RedisBroker
import os

redis_url = os.getenv("REDIS_URL", "redis://redis:6379/0")

broker = RedisBroker(url=redis_url)
dramatiq.set_broker(broker)


@dramatiq.actor
def test_task():
    print("Worker działa")