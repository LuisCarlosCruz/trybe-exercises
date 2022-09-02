class Adaptador_video_player:
    def __init__(self, video_player):
        self.video_player = video_player

    def play(self):
        self.video_player.player_MP4()
