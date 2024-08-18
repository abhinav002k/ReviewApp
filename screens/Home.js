import { Text, View, StyleSheet, FlatList, Pressable, ImageBackground, Modal } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Card from "../components/Card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const [modalOpen, setModalOpen] = useState(false)

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    return (





        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.listContainer}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>


                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                    />
                    <ReviewForm addReview={addReview}/>
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />



            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>

                    </Pressable>
                )}
            />
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})






