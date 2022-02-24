import { Request, Response } from 'express';

import { ImportCateroryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCateroryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
