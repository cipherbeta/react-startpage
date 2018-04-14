import React, {Component} from 'react';

class Search extends Component {

    state = {
        formInput: "",
        isValidURL: false
    }

     onSubmitHandler = (event) => {
        let curState = this.state.formInput;
        let isValid = this.state.isValidURL;
        let searchEngine = "google.com/search?q="
        let secure = "https://"

        if(isValid){
            window.location.assign(secure + curState);
        } else {
            window.location.assign(secure + searchEngine + curState);
        }

        event.preventDefault();
    }

    updateInput = (newState) => {

        let curState = newState.target.value;

        let isURL = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?'+ // port
        '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
        '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        
        if(isURL.test(curState)){
            this.setState({
                isValidURL: true,
                formInput: newState.target.value
            });
        } else {
            this.setState({
                isValidURL: false,
                formInput: newState.target.value
            });
        }
    }


    render(){
        return(
            <div className="submit_wrapper">
                <form onSubmit={this.onSubmitHandler}> 
                    <input
                    className="searchBar"
                    placeholder="search"
                    onChange={(newState) => this.updateInput(newState)}
                    autoFocus
                    />
                    
                    <button
                    type="submit"
                    className="hidden" />
                </form>
            </div>
        );
    }
}

export default Search;