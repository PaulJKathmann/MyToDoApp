import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
‍import Home from '../screens/home';
‍import * as taskActions from '../actions/taskActions';

‍const mapStateToProps = state => ({
      tasks: state.tasks,
    }
);

‍const actions = {  
    ...taskActions
};
  
‍const mapDispatchToProps = dispatch => ({  
    actions: bindActionCreators(actions, dispatch),
});

‍export default connect(mapStateToProps, mapDispatchToProps,)(Home);