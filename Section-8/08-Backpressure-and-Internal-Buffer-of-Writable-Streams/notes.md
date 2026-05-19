What is Backpressure?
=> Backpressure happens when: data is written faster than the destination can process

write() Return Value

true -> Buffer still has space.
false -> Buffer is full. This means: backpressure started

drain Event
=> When the internal buffer becomes empty again, the stream emits: drain event.

highWaterMark
=> The internal buffer size is controlled using: highWaterMark
