import React, { Component } from 'react';
import Popup from "reactjs-popup";

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }
    render() {
        return (
            <div>
                <button className="button button-modal" onClick={this.openModal}>
                    <img src="img/header-logo.png" alt="" className="header-logo" />
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                <div className="modal">
                    <div class="modal-content">
                        <a className="close" onClick={this.closeModal}>
                        &times;
                        </a>
                        <div class="modal-title">Newsletter</div>
                        <p>Subscribe to the Bachas mailing list to receive updates on <br />new arrivals, special offers and other discount information.</p>
                        <div><input type="email" class="modal-field" placeholder="Your Email Here" required /></div>
                        <div><button class="modal-button">Subscribe</button></div>
                    </div>
                </div>
                </Popup>
            </div>
        )
    }
}
