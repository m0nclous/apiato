<?php

namespace App\Ship\Criterias\Eloquent;

use App\Ship\Parents\Criterias\Criteria;
use Prettus\Repository\Contracts\RepositoryInterface as PrettusRepositoryInterface;

class NotNullCriteria extends Criteria
{
    private string $field;

    public function __construct(string $field)
    {
        $this->field = $field;
    }

    public function apply($model, PrettusRepositoryInterface $repository)
    {
        return $model->whereNotNull($this->field);
    }
}
