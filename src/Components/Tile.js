import React from "react";
import { StyledCard, StyledImage } from "./StyledComponents.js";
import { Modal } from "./Modal.js";


class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleModal: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(){
        this.setState({
            toggleModal:true
        })
    }

    hideModal(){
        this.setState({
            toggleModal:false
        })
    }

    render() {
        const songDetails = this.props.data;
        const imgUrlStrip = songDetails.artworkUrl100.split('/');
        const imgSize = imgUrlStrip.pop();
        const highRezImgUrl = [...imgUrlStrip, `640x480bb${imgSize.split('bb')[1]}`].join('/');

        return (
            <StyledCard animationDelay={this.props.animationDelay}>
                <span>
                    <StyledImage alt={songDetails.trackName} src={highRezImgUrl} width={150} height={150} />
                </span>

                <span>{songDetails.trackName ? songDetails.trackName : songDetails.collectionCensoredName}</span>
                <div>
                    <span>{songDetails.artistName}</span>

                    <span> ({(() => {
                        if (songDetails.wrapperType === "track") {
                            return songDetails.kind;
                        } else if (songDetails.wrapperType === "audiobook") {
                            return songDetails.wrapperType;
                        }
                    })()})</span>
                    <button onClick={this.showModal}>Show modal</button>
                </div>

                <Modal closeModal={this.hideModal} show={this.state.toggleModal}>
                    <h1>Temp0 H1</h1>
                    <h1>Temp1 H1</h1>
                </Modal>

            </StyledCard>
        );
    }
}

export default Tile;