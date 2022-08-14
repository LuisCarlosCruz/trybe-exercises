from adaptadorVideoPlayer import Adaptador_video_player
from audioPlayer import Audio_player
from videoPlayer import Video_player


class Media_Player:
    def __init__(self, media):
        self.media = media

    def execute(self):
        self.media.play()


arquivo1 = Media_Player(Audio_player())
arquivo2 = Media_Player(Adaptador_video_player(Video_player()))

arquivo1.execute()
arquivo2.execute()
