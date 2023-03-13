import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ["http//pets-images.dev-apis.com/pets/none.jpg"]
    };

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index
        });
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="grid grid-cols-4 gap-4">
                <img src={images[active]} alt="animal hero"></img>
                <div className="grid grid-cols-4 gap-4">
                    {images.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }

}

export default Carousel;