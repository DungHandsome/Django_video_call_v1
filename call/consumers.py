import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

class CallConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(
            self.my_name,
            self.channel_name
        )
    def call_received(self, event):
        print('Gọi bởi: ', self.my_name)
        self.send(text_data=json.dumps({
            'type': 'call_received',
            'data': event['data']
        }))