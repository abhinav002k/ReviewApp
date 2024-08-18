import { Image, StyleSheet, Text, View,ImageBackground } from "react-native";
import { globalStyles,image } from "../styles/global";
import Card from "../components/Card";




export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params;

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>Review title: {title}</Text>
        <Text>Review body: {body}</Text>

        <View style={styles.rating}>
          <Text>Review rating: </Text>
          <Image source={image.ratings[rating]}/>
        </View>
      </Card>

    </ImageBackground>
  );
}

 


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});

