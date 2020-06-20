import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import {Maybe, None, Some} from "monet";
import Video from "services/models/Video"
import loadableComponent from "components/hoc/loadableComponent"
import {fetchVideoById, fetchVideoSnapshots} from "services/video/VideoService"
import VideoPlay from "./watch/Watch";
import {Snapshot} from "../../services/models/Snapshot";

export default () => {
    const {videoId} = useParams()
    const [video, setVideo] = useState<Maybe<Video>>(None())
    const [videoSnapshots, setVideoSnapshots] = useState<Snapshot[]>([])

    useEffect(() => {
        fetchVideoById(videoId)
            .then(video => setVideo(Some(video)))
    }, [videoId])

    useEffect(() => {
        fetchVideoSnapshots(videoId)
            .then(snapshots => setVideoSnapshots(snapshots))
    }, [videoId])

    return (
        <div className="video-page">
            {loadableComponent(VideoPlay, video.map(value => ({...value, snapshots: videoSnapshots})))}
        </div>
    )
}

