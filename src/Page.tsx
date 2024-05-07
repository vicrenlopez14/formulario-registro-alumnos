import {useState} from "react";
import {Button, FlatList, Modal, Platform, Pressable, Text, TextInput, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const Page = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [alumnos, setAlumnos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [carnet, setCarnet] = useState('');
    const [materiaFavorita, setMateriaFavorita] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
    // Estados para el datetimepicker
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setFechaNacimiento(currentDate);
    }

    const onCrearAlumno = () => {
        if (nombre === '' || carnet === '' || materiaFavorita === '') {
            alert('Por favor llene todos los campos');
            return;
        }

        setModalVisible(!modalVisible);
        setAlumnos([...alumnos, {
            nombre: nombre,
            carnet: carnet,
            materiaFavorita: materiaFavorita,
            fechaNacimiento: fechaNacimiento
        }]);
    }


    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <View style={
            {}
        }>
            {/* Modal registro de alumnos*/}
            <Modal
                animationType="slide"
                style={
                    {
                        flex: 1,
                    }
                }
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }
                }>
                    <View style={
                        {
                            margin: 20,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 35,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5
                        }
                    }>
                        <Text style={
                            {
                                marginBottom: 20,
                                fontSize: 24,
                                fontWeight: 'bold'
                            }
                        }>Registro de alumnos</Text>
                        <TextInput
                            placeholder="Nombre"
                            onChangeText={text => setNombre(text)}
                            value={nombre}
                        />
                        <TextInput
                            placeholder="Carnet"
                            onChangeText={text => setCarnet(text)}
                            value={carnet}
                        />
                        <TextInput
                            placeholder="Materia favorita"
                            onChangeText={text => setMateriaFavorita(text)}
                            value={materiaFavorita}
                        />
                        {/* Muestra el datetimepicker si la variable show es verdadera */}
                        <Pressable
                            onPress={() => {
                                setShow(true);
                                setMode('date');
                            }}
                        >
                            <Text>Seleccionar fecha de nacimiento</Text>
                        </Pressable>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={fechaNacimiento}
                                /*@ts-ignore*/
                                mode={mode}
                                is
                                is24Hour={false}
                                onChange={onChange}
                                locale='es-ES'
                            />
                        )}

                        <Pressable
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                setAlumnos([...alumnos, {
                                    nombre: nombre,
                                    carnet: carnet,
                                    materiaFavorita: materiaFavorita,
                                    fechaNacimiento: fechaNacimiento
                                }]);
                            }}
                        >
                            <Button onPress={
                                onCrearAlumno
                            }
                                    /*@ts-ignore*/
                                    style={
                                        {
                                            marginTop: 20,
                                        }
                                    } title={"Guardar"}/>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/*Boton agregar alumno*/}
            <Pressable
                onPress={() => setModalVisible(true)}
                style={
                    {
                        margin: 10,
                        padding: 10,
                        backgroundColor: 'blue',
                        borderRadius: 10
                    }
                }
            ><Text>Agregar alumno</Text></Pressable>

            {/* Mostrar alumnos en un flatlist*/}
            <FlatList
                data={alumnos}
                renderItem={({item}) => (
                    <View
                    key={item.carnet}
                        style={
                        {
                            margin: 10,
                            padding: 10,
                            backgroundColor: '#f9c2ff',
                            borderRadius: 10
                        }
                    }>
                        <Text>{item.nombre}</Text>
                        <Text>{item.carnet}</Text>
                        <Text>{item.materiaFavorita}</Text>
                        <Text>{item.fechaNacimiento.getDay()}/{item.fechaNacimiento.getMonth() + 1}/{item.fechaNacimiento.getFullYear()}</Text>
                    </View>
                )}
                keyExtractor={item => item.carnet}
            />
        </View>
    );
}

export default Page