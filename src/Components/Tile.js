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

    showModal() {
        this.setState({
            toggleModal: true
        })
    }

    hideModal() {
        this.setState({
            toggleModal: false
        })
    }

    render() {
        const songDetails = this.props.data;
        const imgUrlStrip = songDetails.artworkUrl100.split('/');
        const imgSize = imgUrlStrip.pop();
        const highRezImgUrl = [...imgUrlStrip, `640x480bb${imgSize.split('bb')[1]}`].join('/');
        const trackName = songDetails.trackName ? songDetails.trackName : songDetails.collectionCensoredName;
        const artistName = songDetails.artistName;
        const songType = (() => {
            if (songDetails.wrapperType === "track") {
                return songDetails.kind;
            } else if (songDetails.wrapperType === "audiobook") {
                return songDetails.wrapperType;
            }
        })();
        const parser = new DOMParser();
        let contentDescription = null;
        if (songDetails.hasOwnProperty('description')) {
            contentDescription = parser.parseFromString(songDetails.description, 'text/html').body.innerText;

        } else {
            contentDescription = 'No Description Found';
        }



        return (
            <StyledCard animationDelay={this.props.animationDelay}>
                <span>
                    <button href="#" onClick={this.showModal}>
                    <StyledImage alt={trackName} src={highRezImgUrl} width={250} height={250} />
                    </button>
                </span>

                <div>
                    <span>{trackName}</span>
                    <span>{artistName}</span>
                </div>

                <Modal closeModal={this.hideModal}
                    show={this.state.toggleModal}
                    trackName={trackName}
                    artistName={artistName}
                    songType={songType}
                    contentDescription={contentDescription}>
                    <div className="modal-image">
                        <StyledImage alt={trackName} src={highRezImgUrl} width={200} height={300} />
                    </div>

                </Modal>

            </StyledCard>
        );
    }
}

export default Tile;