import './CarAdd.css';


export default function AddCar() {

    return (

        <div className="form-container">

            <h1 className="add-title text-center">Добави кола</h1>

            <form className="add-form" method="post">


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="firstName">
                            Име
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="firstName"
                        />

                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="imageUrl">
                            Изображение
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="imageUrl"
                        />

                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="otherInfo">
                            Описание
                        </label>
                        <textarea

                            className="form-control"
                            aria-required="true"
                            id="otherInfo"

                        />

                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8">

                        <button
                            type="submit"
                            className="w-100 btn submit-btn btn-primary"
                        >
                            Изпрати
                        </button>

                    </div>
                </div>

            </form>

        </div>
    )
}