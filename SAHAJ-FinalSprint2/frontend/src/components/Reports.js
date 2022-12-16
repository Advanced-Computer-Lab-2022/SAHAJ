
const Reports = () => {
    return (
        <main >
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Reports</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" class="align-text-bottom"></span>
                        This week
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Report #</th>
                            <th scope="col">User type</th>
                            <th scope="col">User ID</th>
                            <th scope="col">View</th>
                            <th scope="col">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td><button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-dark">View Report</button></td>
                            <td>text</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="modal fade  modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rate Course</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="sasadiv">
                                      <strong> You are viewing Report of [id]</strong>
                                    </div>
                                    <br /> <br />
                                    <div class ="course-details">
                                       Here is the report
                                        
                                    </div>
                                    <button type="button" class="btn btn-success">Success</button><br /> <br />
                                    <button type="button" class="btn btn-warning">Pending</button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

        </main>
    );
}
export default Reports
