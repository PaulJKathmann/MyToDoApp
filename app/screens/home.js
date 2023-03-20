import React, {Component} from 'react';
‍import {  ScrollView, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Touchable} from 'react-native';

‍export default class Home extends Component {    render() {    
    constructor(props) {  
        super(props);  
        this.state = {    
          text: '',
        };
    }
    
    componentDidMount() {  
        this.props.actions.fetchTasks()
    };

    _createTask = () => {  
        const {text} = this.state;  
        const task = {text};  
        this.props.actions.createTask(task);  
        this.setState({task: ''});
    }
    
    _completeTask = () => {
        {/* write function to complete task: once done add it to render task function on press */}
    }

    _renderTask(task) {
        return<text>{task.text}</text>;
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}>
                </TouchableOpacity>
                <Text style={styles.itemText}>
                    {task.text}
                </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    }

    _renderTasks() {  
        const {data} = this.props.tasks;
        if (status === 'failure') {    
            return<text>{'Error'}</text>;  
          } elseif (status == 'loading') {    
            return<text>{'Loading'}</text>;  
          }  
        return <View style={styles.items}> {data.map(task => this._renderTask(task))} </View>
    };

    _renderTaskInput() {  
        return (
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" } style={styles.writeTaskWrapper} >
                    <TextInput style={styles.input} placeholder={'Write a task'} value={this.state.text} onChangeText={text => this.setState({text})} />
                    <TouchableOpacity onPress="{this._createTask}" >
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
        );
    }

    return (
        <Scrollview style="{styles.container}">
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
        </Scrollview>
        {this._renderTasks()}
        {this._renderCreateForm()} 
    );  
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
    },
    tasksWrapper: {
     paddingTop: 80,
     paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 24,
      paddingTop: 40,
      marginLeft: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#c0c0c0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });