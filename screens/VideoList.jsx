import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import data from '../data.js';

const VideosList = ({ route }) => {
  const { id } = route.params;
  
  // Find the selected course based on the provided id
  const selectedCourse = data.find((course) => course.id === id);
  
  // Access the videos for the selected course
  const videos = selectedCourse && selectedCourse.Videos;

  // Function to handle opening the video URL
  const playVideo = (videoUrl) => {
    Linking.openURL(videoUrl);
  };

  return (
    <View>
      <Text>{selectedCourse.CourseName}</Text>
      {videos &&
        Object.entries(videos).map(([videoName, videoUrl]) => (
          <TouchableOpacity key={videoName} onPress={() => playVideo(videoUrl)}>
            <View style={styles.videoContainer}>
              <Text>{videoName}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default VideosList;
